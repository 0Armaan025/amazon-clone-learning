import 'package:flutter/material.dart';
import 'package:myshop/constants/error_handling.dart';
import 'package:myshop/constants/global_variables.dart';
import 'package:myshop/constants/utils.dart';
import 'package:myshop/models/user.dart';
import 'package:http/http.dart' as http;

class AuthService {
  void signUpUser({
    required String email,
    required String password,
    required String name,
    required BuildContext context,
  }) async {
    try {
      User user = User(
          id: '',
          name: name,
          password: password,
          address: '',
          type: '',
          token: '',
          email: email);

      http.Response res = await http.post(
        Uri.parse('$uri/api/signup'),
        body: user.toJson(),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
      );
      print(res.statusCode);

      httpErrorHandler(
          response: res,
          context: context,
          onSuccess: () {
            showSnackBar(context,
                'Sign Up successful! please click on sign in and sign in with same credentials!');
          });
    } catch (e) {
      showSnackBar(context, e.toString());
    }
  }
}
