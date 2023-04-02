import React from 'react';
import "./staticWebAppTutorialMain.css"

import "../../../global_components/backgroundcolors.css"

function PerlinMain() {

  return (
    <div className="azureWrapper">
        <h1>Hosting your first static web app on Azure</h1>
    <h2>Harrison DeJong, Cameron Fung ,</h2>
    <h2>March 27, 2023</h2>
    <h3>Table of Contents</h3>
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#instructions">Instructions</a></li>
      <li>
        <a href="#task-one">Task One – Creating Your GitHub Repository</a>
      </li>
      <li>
        <a href="#task-two">Task Two – Configuring the Static Web App Instance</a>
      </li>
      <li><a href="#task-three">Task Three – Updating the Repository</a></li>
      <li><a href="#glossary">Glossary</a></li>
      <li><a href="#troubleshooting-guide">Troubleshooting Guide</a></li>
    </ul>
    <h3 id="introduction">Introduction</h3>
    <p>
      The Following instructions will teach you how to create and host your
      first static web app using Microsoft azure. This platform makes it super
      easy to set up and host the application. It is used by both students and
      professionals because it is very low cost and quick set up.
    </p>
    <p>
      These instructions are intended for students attending an educational
      institution with Microsoft Azure student accounts. Or new developers
      looking to host or practice hosting with limited experience using cloud
      platforms.
    </p>
    <p>In this tutorial the we are using</p>
    <h3 id="instructions">Instructions</h3>
    <p>To follow these instructions, you will need:</p>
    <ul>
      <li>Microsoft Azure Account.</li>
      <li>Github account</li>
      <li>Basic knowledge of html css and java script</li>
      <li>Working code editor</li>
    </ul>
    <h3 id="task-one">Task One – Creating Your GitHub Repository</h3>
    <p>
      The first thing that needs to be done is creating a repository to hold the
      files for your website.
    </p>
    <ol>
      <li>Login to GitHub.com</li>
      <li>Click this link and clone the repository</li>
      <ol type="a">
        <li>Click the fork button</li>
        <li>and click create fork</li>
      </ol>
      <li>Now you should see the repository in your account</li>
    </ol>
    <h2>Task 2 – Create the Server to host the site.</h2>
    <p>
      When this step is finished the app that you downloaded will be hosted on
      the internet for anyone to see.
    </p>
    <p>
      Have an azure account tutorial to make one is
      <a href="azure-tutorial.html">here</a>
    </p>
    <p>Open Microsoft Azure open up the Azure portal page.</p>
    <ol>
      <li>Click on create a resource.</li>
      <li>Scroll Down and Click on “Web”</li>
      <li>Find “Static Web App” and click create</li>
      <li>Create a new resource. Click new</li>
      <li>Fill in the project details</li>
      <ul>
        <li>
          The subscription should already be filled in, if you have multiple
          subscriptions, choose the one that you prefer
        </li>
        <li>
          Make a new resource group, the name is not of importance but if you
          intend to create resources related to your webpage, they should be in
          the same resource group to stay organized
        </li>
        <li>Give your page a name</li>
        <li>
          Choose “Azure Functions and staging details” that is closest to your
          userbase
        </li>
      </ul>
      <li>In “Deployment Details”, add your github account</li>
      <li>
        Select your github account, repository, and branch from the dropdown in
        “Repository”. The build details can be left blank.
      </li>
      <ul>
        <li>
          Note: the branch is the version of the repository, for all projects,
          unless you’re added other projects, this will be called “Main”
        </li>
      </ul>
      <li>Click on “Review + Create”.</li>
      <li>Verify your information is correct and click “create”</li>
      <li>
        Wait for deployment to be complete. Once finished click on “Go to
        resource”
      </li>
      <li>Finally click on the URL to go to your hosted web app</li>
    </ol>
    <p>
      This should take your site! It may take up to a minute to load. Please
      wait and refresh the page if you get an Azure prompt for you to load your
      content.
    </p>
    <p>
      If your content does not load after 60 seconds, please verify that your
      github information is correct by clicking on the github link next to
      “Source” and assure that you have your files correctly pushed to the
      github and that you have selected the correct repository and branch for
      azure to access.
    </p>
    <h2>
      Task Three – Edit the Page: Clone the GitHub Repository and change the
      background color
    </h2>
    <p>
      Now that the web app is up and running let’s make a change to it. By the
      end of this we will have edited our web app.
    </p>
    <p>
      Note: if the repo containing your app folder is already on your computer,
      navigate to this folder and skip to step 5.
    </p>
    <ol>
      <li>Create a new folder somewhere in your computer.</li>
      <li>In the folder click on the address bar and type ‘cmd’</li>
      <li>Copy the url of your othello GitHub repo</li>
      <li>
        In the command line type ‘git clone &lt;url-of-the-repo&gt;’ and hit
        enter. This will clone all the files from the repo on gitHub to your
        computer
      </li>
      <li>
        After you type this command you should see that the project files have
        been downloaded into your project folder
      </li>
      <li>
        Change director to the folder that your just cloned with the cd command
      </li>
      <li>
        Type “code .” into the command line. This will open the project into
        your default code editor
      </li>
      <li>Navigate to index.js</li>
      <li>
        At the top of the file you will see cellBGColor: "#43a047". This is
        where the background color of the board is being defined.
      </li>
      <li>Change what is in quotes to the name of any color.</li>
      <li>
        Note that this color must be a common color as some colors aren’t
        supported.
      </li>
      <li>Save the file.</li>
      <li>
        Now back on the command line type the following commands. These commands
        will save your changes to the repo on GitHub.
      </li>
      <li>git add .</li>
      <li>git commit -m “changing background color of the board”</li>
      <li>git push</li>
      <li>
        After pushing go to GitHub and click on the actions tab. You should see
        that there is a progress animation once that is finished your changes
        will be live on the web app.
      </li>
    </ol>
    <h3>Conclusion</h3>
    <p>
      Once you have completed all these steps your website should be live with
      the unique background color of your choice. You can visit the url that is
      assigned to your app on the Azure portal.
    </p>
    <p>
      With the knowledge gained from this tutorial you should be able to take a
      static web app and deploy it to the internet for anyone to see.
    </p>
    <h3>Conclusion</h3>
    <p>Can’t Connect To Server.</p>
    <p>
      Check Digital Oceans twitter account or your email address for any
      downtime at the service. This is a typical occurrence at some of their
      datacenters around the country. Link to Digital Ocean uptime status:
      <a href="https://twitter.com/dostatus">twitter.com/dostatus</a>
    </p>
    <p>Forgot Password?</p>
    <p>
      If you forget your password, visit the Access tab and press the Reset Root
      Password button for a new server password.
    </p>
    <p>No Datacenter In Your Country.</p>
    <p>
      Picking a datacenter closer to where you live will increase loading speeds
      for your web server. Digital Ocean is currently expanding its business
      into multiple countries, so a datacenter closer to you will eventually
      show up.
    </p>
    </div>
  );
}

export default PerlinMain;
