const ciders = ['Next up: Hibiscus. A semi-dry, Hibiscus-infused cider, lending a radiant red hue and characteristic berry-packed zip with crisp, clean citrus and alluring floral aromas.', 'Next up: Peach. Sun-kissed cider, reminiscent of biting into that first freshly-picked orchard peach of the season—enchantingly sweet, juicy, and radiant.', 'Next up: Black Lyte Watermelon. A light sweet profile of watermelon enhanced with a small kick of lime, creating a delightful fusion of flavor. Only 90 calories!', 'Next up: Blackberry. A semi-sweet cider with bewitching aromas of wild blackberry bramble and the thrilling promise of adventure.', "Next up: Strawberry. A taste of perfectly ripe strawberries, still warm from the sun. This supremely pleasant cider is bright and tangy-sweet.", "Next up: Pumpkin Spice. 'Tis the season of sweaters and pumpkin patches. Break out the Pumpkin Spice Cider around the fire pit for a true Autumn experience."];

const getRandomIndex = () => Math.floor(Math.random() * ciders.length);

function generateCider(num) {
    let index = getRandomIndex();
    return ciders[index];
}

console.log(generateCider())