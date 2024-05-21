#include "program.h"
#include <iostream>
#include <vector>

int main(void) {

  //  Init the Program class
  Program start;

  // Init the variables: score count and question numbers
  int score = 0; // Player scroes
  int q_nums = 10; // Number of questions
  int count = 0; // Number of questions asked

  std::cout
      << "------------------------ Math Program -----------------------------"
      << std::endl;

  std::cout << "How many questions you want to be asked ?" << std::endl;
  std::cin >> q_nums;


  // Iterate until question numbers is equel to the count
  while (count != q_nums) {
    std::string answer;
    std::vector<std::string> a = start.program_random_question();


      std::cout
          << "------------------------ Question -----------------------------"
          << std::endl;

    std::cout << "Question: " << a.front() << std::endl;
    std::cout << "Answer: ";
    std::cin >> answer;

    /*
        If the answer is wrong the program will give the student 3 chances before telling the
        right answer
    */
    if (start.program_white_space(answer) !=
        start.program_white_space(a.back())) {
      int again = 0;

      while (again != 3 && start.program_white_space(answer) !=
                               start.program_white_space(a.back())) {
        std::cout << "Wrong Answer...Try again: "
                  << "\n\n";
        std::cout << "Question: " << a.front() << std::endl;
        std::cout << "Answer: ";
        std::cin >> answer;
        again++;
      }
      std::cout << "Correct Answer: " << a.back() << std::endl;
    } else {

        // If the student got the corrent answer it will add to the score.
      score++;
      std::cout << "Your answer is Correct, good job! . Moving on..."
                << "\n\n";
    }
    count++;
  }
// Will print the number of questions asked and correct answers
  std::cout <<"\n" << "Questions asked: " << q_nums << "\n";
  std::cout << "Correct answers: " << score << "\n";

  return 0;
};
