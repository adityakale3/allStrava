import React from "react";

export const GettingStarted = React.lazy(() =>
  import("../view/User/GettingStarted")
);
export const Login = React.lazy(() => import("../view/User/Login"));
export const Dashboard = React.lazy(() => import("../view/Dashboard/Home"));
export const NavigateTabs = React.lazy(() =>
  import("../components/NavigationTabs")
);
export const You = React.lazy(() => import("../view/You"));
export const ContentBox = React.lazy(() => import("../components/ContentBox"));
export const Home = React.lazy(() => import("../view/Home"));
export const Leaderboard = React.lazy(() => import("../view/Leaderboard"));
export const CreateChallenge = React.lazy(() =>
  import("../view/CreateChallenge")
);
export const Milestones = React.lazy(() => import("../view/Milestones"));
export const Profile = React.lazy(() => import("../view/Profile"));
export const Signup = React.lazy(() => import("../view/User/Signup"));
export const Logout = React.lazy(() => import("../view/User/Logout"));
export const StravaGetCode = React.lazy(() =>
  import("../view/Strava/StravaGetCode")
);
export const QNA = React.lazy(() => import("../view/Qna"));
export const Verify = React.lazy(() => import("../view/Verify"));
export const Wallet = React.lazy(() => import("../view/Wallet"));

export const FAQ = React.lazy(() => import("../view/FAQ"));
