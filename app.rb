require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
set :public_folder, proc {File.join(root)}
enable :sessions

  get '/' do
    send_file 'index.html'
  end

  get '/temperature' do
    response.headers['Access-Control-Allow-Origin'] = '*'
      p session[:temperature]
    if session[:temperature]
      JSON.generate({temperature: session[:temperature]})
    else
      JSON.generate({temperature: 20})
    end
  end

  post '/temperature' do
    response.headers['Access-Control-Allow-Origin'] = '*'
    p session[:temperature]
    p session[:temperature] = params[:temperature]
    p session[:temperature]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
