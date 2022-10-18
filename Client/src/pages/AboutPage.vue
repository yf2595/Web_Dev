<template>
  <div class="container">
    <b-row>
        <b-col>
            <b-card
            title="Amit Partuk"
            img-src="https://media-exp2.licdn.com/dms/image/C4E03AQFmqmUGQmMFWA/profile-displayphoto-shrink_800_800/0/1627388607532?e=1661990400&v=beta&t=a-NZ5JHyxfZGkPc9FXF7KN-w-4IAfbrPkAOoSBplXI8"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            I am third Year Bcs inforamtion and software engineering. Currntly working as a software developer at Elbit systems.
            Love to swim and spend some time with my family. This is my first web full stack project and i hope you enjoy it.
            </b-card-text>

            <b-button href="https://www.linkedin.com/in/amit-partuk-15385a218/" class="button">Amit`s linkedIn</b-button>
            </b-card>
        </b-col>
        <b-col>
            <b-card
            title="Yuval Felendler"
            img-src="https://media-exp2.licdn.com/dms/image/C4E03AQHWyN6wJeTckw/profile-displayphoto-shrink_800_800/0/1647787836281?e=1661990400&v=beta&t=Co-9LXZxKAk4e0DAld1w_bXvYCjLrOCEZGNN42XSClU"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            I am third Year Bcs inforamtion and software engineering. Currntly working as a RT software developer at SIgmaBit.
            Love to run and drink beer with my friends.
            </b-card-text>

            <b-button href="https://www.linkedin.com/in/yuval-felendler-58a016233/" class="button">Yuval`s LinkedIn</b-button>
            </b-card>
        </b-col>
        <b-col>
            <b-card
            title="OUR KITCHEN"
            img-src="https://www.kipa.co.il/userFiles/296656_27a17e78563ffbb73b04efda8576bd1c.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            This website is all about our favorite staff which is food. enjoy our website by exploring differnet recipes that are easy to make and in the end - very tasty.
            Here you can search for your recipes by name or ingridient, you can search for recipes customize to your diet, tolernece or cuisine.
            you can also add your own delicious recipes to the website so all of us can enjoy them.
            feel free to register and sign in - its for free!
            ready to cook Chef?
            </b-card-text>

            <b-button :to="{ name: 'main' }" class="button">To the Kitchen</b-button>
            </b-card>
        </b-col>
    </b-row>
    <b-row>
      <b-col>
          <b-card
            title="PacMan 2022"
            img-src="https://play-lh.googleusercontent.com/V-lvUzA5kK0Xw3wdg8Ct3vfIMXUX5vXYcNLPmudaZ-eyQjedYz-luqIuLmJO6KodE0Y"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            We developed pacman web game using HTML5 as part of our assigments in this course.
            The game allowing you to register, login and play the old well known game of pacman where you get to choose your configurtaions and game experience.
            </b-card-text>

            <b-button href="https://web-development-environments-2022.github.io/assignment2-207597063_206116030/" class="button">To the Game</b-button>
            </b-card>
      </b-col>
      <b-col>
          <b-card
            title="Personal webSite"
            img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Benjamin_Netanyahu_2018.jpg/250px-Benjamin_Netanyahu_2018.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Personal web page are easy if you will choose us to do it for you.
            all you need is a chair to sit and tell us all about you, with a little bit of photos and your favorite song, we can make sure everyone else will get to know you.
            Take a look on a webpage we created for the previous prime minister of israel, mr benjamin netanyahu
            </b-card-text>

            <b-button href="https://web-development-environments-2022.github.io/206116030/" class="button">Bibi personal web page</b-button>
            </b-card>
      </b-col>
      <b-col>
          <b-card
            title="Personal webSite"
            img-src="https://web-development-environments-2022.github.io/207597063/src/image2.jpeg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Personal web page are easy if you will choose us to do it for you.
            all you need is a chair to sit and tell us all about you, with a little bit of photos and your favorite song, we can make sure everyone else will get to know you.
            Take a look on a webpage we created for peretz partuk, amits amazing grandfather.
            </b-card-text>

            <b-button href="https://web-development-environments-2022.github.io/207597063/" class="button">Peretz Partuk personal web page</b-button>
            </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.button {
  display: inline-block;
  padding: 10px 50px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #92817a;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #999;
}

.button:hover {
  background-color: #854d27
  }

.button:active {
  background-color: #854d27;
  box-shadow: 0 3px #666;
  transform: translateY(4px);
}
</style>
