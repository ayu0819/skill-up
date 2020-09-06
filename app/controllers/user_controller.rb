class UserController < ApplicationController
  def login_form
  end

  def new
    @user = User.new
  end

  def mypage
  end

  def index
    @user = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(name: params[:name], email: params[:email])
    # 保存が成功したかどうかで条件分岐をしてください
    if @user.save
      flash[:notice] = "ユーザー登録が完了しました"
      redirect_to("/user/#{@user.id}")
    else
      render("user/new")
    end
  end

  def edit
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.name = params[:name]
    @user.email = params[:email]
    if @user.save
      flash[:notice] = "ユーザー情報を編集しました"
      redirect_to("/user/#{@user.id}")
    else
      render("user/edit")
    end
  end

  def login
    @user = User.find_by(email: params[:email], password: params[:password])
    if @user
      flash[:notice] = "ログインしました"
      # リダイレクト先
      redirect_to("/")
    else
      # @error_messageを定義してください
      @error_message = "メールアドレスまたはパスワードが間違っています"
      
      # @emailと@passwordを定義してください
      @email = params[:email]
      @password = params[:password]
      
      render("user/login_form")
    end
  end

end
