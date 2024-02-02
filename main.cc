#include "program.h"
#include <iostream>
#include <vector>

int main(void) {

  Program start;

  int score = 0;
  int q_nums = 10;
  int count = 0;

  std::cout
      << "------------------------ Math Program -----------------------------"
      << std::endl;

  std::cout << "How many questions you want to be asked ?" << std::endl;
  std::cin >> q_nums;

  while (count != q_nums) {
    std::string answer;
    std::vector<std::string> a = start.program_random_question();
    std::cout << "Question: " << a.front() << std::endl;
    std::cout << "Answer: ";
    std::cin >> answer;

    if (start.program_white_space(answer) !=
        start.program_white_space(a.back())) {

      int again = 0;

      while (again != 3 && start.program_white_space(answer) !=
                               start.program_white_space(a.back())) {
        std::cout << "Try again: "
                  << "\n\n";
        std::cout << "Question: " << a.front() << std::endl;
        std::cout << "Answer: ";
        std::cin >> answer;
        again++;
      }
      std::cout << "Correct Answer: " << a.back() << std::endl;
    } else {
      score++;
      std::cout << "Your correct. Moving on..."
                << "\n\n";
    }
    count++;
  }

  std::cout << "Questions asked: " << q_nums << "\n\n";
  std::cout << "Correct answers: " << score << "\n";

  return 0;
};
