# RoleAssignBotBasedOnResponse
A Discord bot that moderates introduction channels by enforcing a word count minimum, filtering inappropriate content, and auto-assigning roles. It ensures quality introductions, bans users for profanity, and streamlines the onboarding process with detailed logging. Built with discord.js and bad-words.

# Discord Introduction Quality and Role Assignment Bot
This repository contains a Discord bot built with discord.js that automates the moderation of introduction channels in a Discord server. The bot ensures high-quality introductions by enforcing a word count minimum and filtering out inappropriate content. Additionally, it automatically assigns a specific role to members upon successful introduction.

# Features
Introduction Quality Control: Messages in the designated introduction channel are monitored for word count. Messages shorter than 30 words are automatically deleted, and the user is notified via direct message to provide a more detailed introduction.

Profanity Filter: The bot uses the bad-words library to detect and remove messages containing inappropriate content. Offending users are banned from the server to maintain a safe community environment.

Automatic Role Assignment: Once a user submits an appropriate introduction, the bot assigns a specific role to the user, streamlining the onboarding process.

Detailed Logging: The bot logs all actions, such as message deletions, bans, and role assignments, providing transparency and traceability.

# How to Use
    Clone the Repository: git clone https://github.com/your-repo-url
Install Dependencies: Run npm install to install the necessary packages.
Configure the Bot: Replace the placeholders with your actual Discord bot token, introduction channel ID, and role ID.
Run the Bot: Execute node index.js (assuming your main file is named index.js) to start the bot.
Ensure that your bot has the necessary permissions in your Discord server to manage messages, assign roles, and ban users.

# Requirements
  Node.js
  Discord.js
  bad-words
  
# License
This project is licensed under the MIT License - see the LICENSE file for details.
