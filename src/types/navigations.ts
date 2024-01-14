import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export declare type AuthParamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthScreenProps<T extends keyof AuthParamList> =
  NativeStackScreenProps<AuthParamList, T>;

export declare type RootParamList = {
  Tab: NavigatorScreenParams<TabParamList>;
  Auth: NavigatorScreenParams<AuthParamList>;
};

export type RootScreenProps<T extends keyof RootParamList> =
  NativeStackScreenProps<RootParamList, T>;

export declare type TabParamList = {
  Recommendation: undefined;
  NewProduct: undefined;
  Live: undefined;
  Video: undefined;
  Notification: undefined;
  Account: undefined;
};

export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  NativeStackScreenProps<RootParamList>
>;