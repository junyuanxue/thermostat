require "data_mapper"
require "dm-postgres-adapter"

class Temperature
  include DataMapper::Resource

  property :id, Serial
  property :temperature, Integer
end

DataMapper.setup(:default, "postgres://localhost/temperature_log")
DataMapper.finalize
DataMapper.auto_upgrade!
