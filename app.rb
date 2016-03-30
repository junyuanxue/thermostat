require 'sinatra/base'
require_relative 'temperature.rb'
require 'json'

class Thermostat < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  get "/" do
    send_file "index.html"
  end

  get "/temperature" do
    current_temp = Temperature.last.temperature
    Temperature.last.destroy
    return current_temp.to_s
  end

  post "/temperature" do
    p params
    Temperature.create(temperature: params[:temperature].to_i)
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
