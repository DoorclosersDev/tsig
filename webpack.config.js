const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        // login: './src/js/login.js',
        // dashboard: './src/js/dashboard.js',
        // auth: './src/js/auth.js',
        // db: './src/js/db.js',
        main: './src/js/main.js',
    },
    output: {
        filename: 'scripts/[name].bundle.js', // Output JS files to the 'scripts' subfolder
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html', // Output HTML files to the 'pages' subfolder
            chunks: ['index'],
  
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html', // Output HTML files to the 'pages' subfolder
            chunks: ['about'],
  
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/scenes/overview.html',
        //     filename: 'pages/overview.html', // Output HTML files to the 'pages' subfolder
        //     chunks: ['overview'],

        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/scenes/agents.html',
        //     filename: 'pages/agents.html', // Output HTML files to the 'pages' subfolder
        //     chunks: ['agents'],

        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/scenes/leads.html',
        //     filename: 'pages/leads.html', // Output HTML files to the 'pages' subfolder
        //     chunks: ['leads'],

        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/scenes/leadSubmit.html',
        //     filename: 'pages/leadSubmit.html', // Output HTML files to the 'pages' subfolder
        //     chunks: ['leadSubmit'],

        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/scenes/clients.html',
        //     filename: 'pages/clients.html', // Output HTML files to the 'pages' subfolder
        //     chunks: ['clients'],

        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/scenes/applicationForm.html',
        //     filename: 'pages/applicationForm.html', // Output HTML files to the 'pages' subfolder
        //     chunks: ['applicationForm'],

        // }),
    ],
};
