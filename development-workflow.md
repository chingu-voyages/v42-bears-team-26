# Development workflow

1. **Ticket/Issue:** 
   * Take a note of the issue number of the ticket you will work on.
   * If no ticket exists then create a new ticket and take a note of the issue number'
  
2. **Create a new branch** from develop 
   > *All new branches must always be created from develop branch*

    Either
      * Create your branch locally using: 
        * `git checkout develop` - this will select the develop branch
        * then `git checkout -b <branch-name>` - this will create a new branch called `<branch-name>` and switch your working directory to this new branch.
  
    Or    
      * Create a new branch in Github. 
        * Select the develop branch and in the dropdown type the name of the new branch to be created where it says `Find or create a branch`. 
        * Once you've created your branch go to your vscode (or other code editor/terminal) and use `git pull`.
        * then `git checkout <branch-name>`, to select the branch you just created.

3.  **Track changes:** Do the work required in your branch. After you saved your work file(s) and unit tests (no bug):
       * Use `git add .` or `git add <file name>` to add the new version of your work file(s) to staginf area on your local directory.
       * Then use `git commit -m <message>` to commit your work.
       * When you are ready to push your work to Github, use `git push` 

4.  **Pull Request(PR):** When you have finished your work (issue/ticket), in Github:
       * Select the `Pull Requests` tab and select the `New pull request button`.
       * Here you can select for your branch `<branch-name>` to be merged into the develop branch 
       * > *All PRs must be to the develop branch*

5.  **Add comment:** Inside your PR in the description section type `closes #<issue-number>` for example `closed #15`. Select the issue number that you are working on from the dropdown. This will link the PR to the ticket.

6.  **Code Review:** In the PR you create select someone from the team to review the PR. The PR will be reviewed by that person. They may request changes to the code or they may appove for the PR to be merged. 
7.  **Merged to develop branch:** If approved either you or the reviewer may merge the PR. The branch you have been working in should automatically be deleted after merge.
    * If changes are requested, refer to step 3 above.
    
8. Once merged you can work on another ticket.

> ### A couple of things to always ask yourself
> **Have I created my branch from develop branch?**
> Make sure you're not committing code directly to develop branch!
> 
> **Is the PR I'm creating asking for my branch to be merged into develop branch?** 
> Make sure we are always merging into develop branch.