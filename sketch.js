function setup() {
  // Create instances of Penguin subclass
  let BlackPenguin = new Penguin("Pippin", "honk-honkkk", "blackbeak,");
  let YellowPenguin = new Penguin("EmperorPenguin", "honk-honkkk", "yellowneck,");
  // Let them talk
  BlackPenguin.talk();
  BlackPenguin.expressYourself();
  YellowPenguin.talk();
  YellowPenguin.expressYourself();
}