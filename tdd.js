/*
 ### Test-driven Development

 Reference: https://chisellabs.com/glossary/what-is-test-driven-development/

 >. This is an agile software development approach where tests get created before writing the actual code.
 >. Writing the code to pass the tests comes after designing and implementing tests. (from Agile Manifesto)
 >. Hence testing becomes the primary focus from the getgo in the software development process.

      How it works?

>. Developers start by creating specific tests that define behavior of the code.
These tests act as a roadmap, guiding the development process. After which the code later gets written to make the tests pass.

>. TDD is a continuous cycle of writing, coding and running tests to ensure the code functions correctly.
>. Through this iterative process we allow for quick feedback and early detection of bugs, hence improving the overall quality and reliability of software and subsequently codebases.
>. It promotes better code quality, faster feedback loops and improved maintainability


     Steps in Test Driven Development

   1]] Write a Failing Test

>. Identify a specific test case or requirement that needs to get implemented.
>. Write a test case that verifies the expected behavior or outcome.
>. Write the necessary test code to validate the desired functionality

   2]] Make the Test Pass

>. Write the minimum production code required to make the failing test pass.
>. Run the test and verify that it now passes successfully.
>. Refrain from writing additional code beyond what is necessary to pass the test.

   3]] Refactor

>. Review the code for improvements, such as clarity, efficiency or maintainability.
>. Restructure the code while ensuring that all tests still pass.
>. Continuously refactor the code to improve its overall quality without changing the behavior.



    Benefits of Test Driven Development

   1]] Improved code quality

>. TDD promotes writing of modular, maintainable and loosely coupled code.
>. Developers are able to understand expected behavior, leading to cleaner and more reliable code.

   2]] Faster Feedback Loop

>. TDD provides immediate feedback on code's correctness. Failing tests indicates that code is not at par with desired
requirements. Through TDD issues within the code can be identified and fixed quickly hence - rapid development process.

   3]] Increased Confidence

>.Through TDD, devs have confidence in their code as automated tests back it up, hence they can make changes, or add new features
without fear of breaking existing functionality as long as tests pass.

   4]] Easier Maintenance and Refactoring

>. TDD encourages writing tests for each piece of functionality, hence refactoring becomes easy as tests will catch any regression issues.

   5]] Better Design and Architecture

>. TDD encourages writing testable code from the start. This often leads to better 
design decisions, such as decoupling modules, adhering to SOLID principles, and promoting a more modular architecture.

   6]] Enhanced Collaboration

>. TDD encourages collaboration between developers and stakeholders.
>. How???  ... Tests also serve as documentation, making it easier for others to understand the codebase.
           ... Tests act as a common language, enabling better communication and a shared understanding of requirements. 

   7]] Reduced Debugging Time

>. TDD enables bugs to be caught earlier, hence minimizing time spent on debugging.
>. Tests act as clear indicators of what need to be fixed, hence minimizing a lot of time consumption on debugging.

   8]] Regression Testing

>. TDD ensures that existing functionality remains intact even when new features are added.
>. By running the existing tests, developers can quickly identify any inadvertently broken that previously worked.


        #### Best Practices for Test Driven Development ####

   1]] Keep tests simple and focused


   2]] Write tests for edge cases and boundary conditions


   3]] Regularly refactor code and tests


   4]] Use TDD as a guiding principle, not a strict rule


   5]] Involve the entire team in TDD















*/
