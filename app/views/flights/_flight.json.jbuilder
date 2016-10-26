json.extract! flight, :id, :airplane_id, :origin, :destination, :date, :flight_number, :created_at, :updated_at
json.url flight_url(flight, format: :json)
