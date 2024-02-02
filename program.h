#ifndef PROGRAM_H
#define PROGRAM_H

#include <iostream>
#include <random>
#include <string>
#include <unordered_map>
#include <vector>

class Program {
public:
  std::vector<std::string> program_random_question();
  std::string program_white_space(const std::string &str);

private:
  std::unordered_map<std::string, std::string> questions = {
      {"1 + 1", "2"},
      {"2 + 3", "5"},
      {"9 + 3", "12"},
  };
};

std::string Program::program_white_space(const std::string &str) {
  size_t first = str.find_first_not_of(" \t\n\r");
  if (first == std::string::npos) {
    return "";
  }
  size_t last = str.find_last_not_of(" \t\n\r");
  return str.substr(first, last - first + 1);
}
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
