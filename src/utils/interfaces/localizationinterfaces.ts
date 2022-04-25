export interface LoginPage {
  Login_Title: string;
  Remember_Me: string;
  Signin_Btn: string;
  Signup_Link: string;
  Forgot_Password: string;
}
export interface SignUpPage {
  Signup_Title: string;
  Signup_Btn: string;
  Signin_Link: string;
}
export interface Appbar {
  Profile: string;
  Account: string;
  Document: string;
  Logout:  string;
}
export interface ReviewRightSideBar {
  Publish: string;
  Share: string;
}
export interface ReviewSideBar {
  Docs_To_Review: string;
  List_Of_Projects: string;
}
export interface UserIntegrationRightSideBar {
  Connect_Service: string;
}
export interface UserRightSideBar {
  Connect_Codebase: string;
}
export interface OnBoardPage {
  onBoard: string;
  SelectLanguage: string;
  SelectRole: string;
}
export interface GoodToGo {
  Title: string;
  Subtitle: string;
  Tell_Title: string;
  Tell_Subtitle: string;
  Integrate_Title: string;
  Integrate_Subtitle: string;
  Keyboard_Title: string;
  Keyboard_subtitle: string;
  Open_Documatic: string;
}
export interface InviteCo {
  Title: string;
  Subtitle: string;
  Invite_As: string;
  Select_Role: string;
  Send_Invites: string;
  Continue_Button: string;
}
export interface orgConnection {
  Connection_Text: string;
  Make_Connection: string;
  Remove_Connection: string;
}
export interface SubscribePage {
  Title: string;
  Subtitle: string;
  Subscribe_Weekly: string;
  Subscribe_Weekly_Desc: string;
  Follow_Us_Title: string;
  Follow_Us_Desc: string;
  Documatic_Btn: string;
  Continue_Btn: string;
}

export interface LocalizationInterface {
  loginPage: LoginPage;
  signUpPage: SignUpPage;
  appBar: Appbar;
  reviewRightSideBar: ReviewRightSideBar;
  reviewSideBar: ReviewSideBar;
  userIntegrationRightSideBar: UserIntegrationRightSideBar;
  connectCodebase: UserRightSideBar;
  onBoardPage: OnBoardPage;
  goodToGo: GoodToGo;
  inviteCo: InviteCo;
  orgConnection: orgConnection;
  subscribePage: SubscribePage;
}