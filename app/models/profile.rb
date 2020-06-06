# == Schema Information
#
# Table name: profiles
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  color      :string           not null
#
class Profile < ApplicationRecord
    validates :title, :user_id, presence: true
    validates :title, uniqueness: { scope: :user_id }

    belongs_to :user, class_name: "User", foreign_key: "user_id"
end
