import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:vida/features/auth/screens/auth_screen.dart';
import 'package:vida/screens/home.dart';
import 'package:vida/widgets/bottom_bar.dart';

Route<dynamic> generateRoute(RouteSettings routeSettings) {
  switch (routeSettings.name) {
    case AuthScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => AuthScreen());
       
         case Home.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => Home());
         case BottomBar.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => BottomBar());
        default:
       
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => Scaffold(
          body: Center(
            child: Text('Screen does not exist'),
          ) ,
        )
        );
  }
}
