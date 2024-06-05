#ifndef PROGRAM_H
#define PROGRAM_H

#include <iostream>
#include <random>
#include <string>
#include <unordered_map>
#include <vector>

/*
    Program class where all the functions used in the program
*/
class Program {
public:
  /*
      Init the functions to be used in the class
  */
  std::vector<std::string> program_random_question();
  std::string program_white_space(const std::string &str);

private:
  /*
      All questions and answers are inside the map
  */
  std::unordered_map<std::string, std::string> questions = {
      {"1 + 1", "2"},
      {"2 + 3", "5"},
      {"9 + 3", "12"},
      {"1 + 1", "2"},
      {"2 + 3", "5"},
      {"9 + 3", "12"},
      {"892 - 345", "547"},
      {"23 * 56", "1288"},
      {"780 / 10", "78"},
      {"987 + 654 + 321", "1962"},
      {"Factorial of 5", "120"},
      {"Factorial of 7", "5040"},
      {"Factorial of 10", "3628800"},
      {"Average of 10, 20, 30, 40, 50", "30"},
      {"Average of 15, 25, 35, 45, 55", "35"}};
};
/*
    Parses the questions and answers from the "questions" map
*/
std::string Program::program_white_space(const std::string &str) {
  size_t first = str.find_first_not_of(" \t\n\r");
  if (first == std::string::npos) {
    return "";
  }
  size_t last = str.find_last_not_of(" \t\n\r");
  return str.substr(first, last - first + 1);
}

/*
 Assuming we have a map called 'questions' that stores the questions
 ands tores the corresponding answers
 Function to randomly ask a question from the map
*/
std::vector<std::string> Program::program_random_question() {
  int index = 1;
  std::random_device rd;
  std::mt19937 gen(rd());
  std::uniform_int_distribution<int> distribution(1, questions.size());
  int random_number = distribution(gen);

  for (auto q : questions) {
    if (index == random_number)
      return {q.first, q.second};

    index++;
  }
  return {};
};

#endif
