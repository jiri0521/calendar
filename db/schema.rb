# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_23_135900) do

  create_table "TBL_SCHEDULE", primary_key: ["USER_CD", "ID"], options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "USER_CD", limit: 10, default: "", null: false
    t.integer "ID", default: 0, null: false
    t.string "TITLE", limit: 100
    t.datetime "START"
    t.datetime "END"
    t.string "TEXTCOLOR", limit: 20
    t.string "COLOR", limit: 20
    t.string "URL", limit: 100
    t.string "ALLDAY", limit: 10
  end

  create_table "T_BodyPart", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "部位", limit: 30, null: false
  end

  create_table "T_BodyPartDetail", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "部位詳細", limit: 45
    t.integer "T部位id"
  end

  create_table "T_Login", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "UserName", limit: 30, null: false
    t.string "PassWord", limit: 30, null: false
    t.string "Role", limit: 30, null: false
  end

  create_table "T_Patient", primary_key: "No", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "PID", null: false
    t.string "PNAME", limit: 45, null: false
    t.string "Birthday", limit: 45
    t.string "Sex", limit: 6
    t.float "Weight"
    t.string "BodyPart", limit: 45
    t.string "BodyPartDetail", limit: 45
    t.float "CTDIvol"
    t.float "DLP"
    t.string "Date", limit: 45
  end

  create_table "T取引業者マスタ", primary_key: "取引業者ID", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "取引業者名", limit: 60, null: false
    t.string "TEL", limit: 20, null: false
    t.string "TEL携帯", limit: 20, null: false
    t.string "メールアドレス", limit: 60, null: false
    t.string "住所", limit: 40, null: false
    t.string "担当者", limit: 20, null: false
  end

  create_table "T履歴", primary_key: "No", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "日付", limit: 60, null: false
    t.string "ログ", limit: 60, null: false
    t.string "ユーザー", limit: 60, null: false
    t.index ["No"], name: "No", unique: true
  end

  create_table "group_users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "group_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_group_users_on_group_id"
    t.index ["user_id"], name: "index_group_users_on_user_id"
  end

  create_table "groups", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_groups_on_name", unique: true
  end

  create_table "tasks", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "title", null: false
    t.bigint "user_id"
    t.bigint "group_id"
    t.date "task_date", null: false
    t.time "task_start"
    t.time "task_end"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "comp"
    t.index ["group_id"], name: "index_tasks_on_group_id"
    t.index ["user_id"], name: "index_tasks_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "nickname", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["nickname"], name: "index_users_on_nickname", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "group_users", "groups"
  add_foreign_key "group_users", "users"
  add_foreign_key "tasks", "groups"
  add_foreign_key "tasks", "users"
end
