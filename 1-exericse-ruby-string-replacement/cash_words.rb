require 'net/http'
require 'json'

class CashWords

  def has_word?(word)
    db['words'].include?(word.downcase)
  end

  def get_links_for_word(word)
    response = []
    db['partners'].sample(rand(db['partners'].size-1) + 1).each do |partner|
      response << {
        amount: (rand() / 20).round(3),
        url:    partner + word + '?partner=smooth'
      }
    end
    response
  end

  private

  def db
    @db ||= begin
            raw = Net::HTTP.get(URI('https://gist.githubusercontent.com/banderson623/fbdc02c3baed6e4119ecdb7a6fc6dc53/raw/38b9a47555a009b78ea0540274bc494818af85f7/lookup.json'))
            JSON.parse(raw)
          rescue
            [];
          end
  end
end
