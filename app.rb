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
    p session[:city]
    if session[:temperature]
      JSON.generate({temperature: session[:temperature],
                     city: session[:city]})
    else
      JSON.generate({temperature: 20,
                     city: nil})
    end
  end

  post '/temperature' do
    response.headers['Access-Control-Allow-Origin'] = '*'
    session[:temperature] = params[:temperature]
    p session[:city] = params[:city]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
