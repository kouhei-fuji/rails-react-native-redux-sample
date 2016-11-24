FactoryGirl.define do
  factory :post do
    title { Faker::Book.title }
    body  { Faker::Lorem.paragraphs(6).join("\n") + Faker::Lorem.paragraphs(6).join("\n" * 2) }
  end
end
