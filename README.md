# Latest Crypto News
A Discord bot and React application which fetches cryptocurrency news and prices

## Discord Bot
| Command                            | Description                                                                      |
| ---------------------------------- |:-------------------------------------------------------------------------------: |
| !ping                              | Checks if the bot is online and working                                          |
| !price <crypto> <vs_currency>      | Fetches the price of a crypto with respect to another currency or cryptocurrency |
| !news                              | Fetches the latest news related to cryptocurrency                                |
| !help                              | Replies with all commands available and their description                        |

### To run the bot:
1. Clone the repo
2. Create an `.env` file and add `DISCORD_BOT_TOKEN` and `NEWS_API_KEY`
3. Run the bot using `node bot`

## Available Scripts for React Application

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Credits

[DiscordJS](https://discord.js.org/)
[CoinGecko](https://www.coingecko.com/), [CoinGecko Node API](https://github.com/miscavage/CoinGecko-API)
[News API](http://newsapi.org/), [News Node API](https://www.npmjs.com/package/newsapi)
