class Bird {
  constructor(breed = "human", name = "Nobody", lang = "honk-honkk") {
    this.breed = breed;
    this.name = name;
    this.language = lang;
  }
  talk() {
    print(this.language);
  }
  expressYourself() {
    print(
      "Hello everyone, I'm " +
        this.breed +
        ". I am from Antarctica and I love to eat fishes. My favourite activity is to slide across the snow. I and my friends communicate with each other by saying " +
        this.language
    );
  }
}