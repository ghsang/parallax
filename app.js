import gsap from 'https://cdn.skypack.dev/gsap'

const ITEMS = [
  {
    identifier: 'kody-blue',
    backgroundPositionX: 84.4,
    backgroundPositionY: 50,
    size: 739,
    config: {
      positionX: 50,
      positionY: 54,
      moveX: 0.15,
      moveY: -0.25,
      height: 58,
      width: 55,
      rotate: 0.01,
    },
  },
  {
    identifier: 'battery',
    size: 2620,
    backgroundPositionX: -0.075,
    backgroundPositionY: 0,
    config: {
      positionX: 74,
      positionY: 15,
      positionZ: -1,
      moveX: 1.5,
      moveY: -0.85,
      height: 17,
      width: 17,
    },
  },
  {
    identifier: 'leaf-one',
    size: 10000,
    backgroundPositionX: 3.75,
    backgroundPositionY: -1,
    config: {
      positionX: 35,
      positionY: 94,
      moveX: 1.5,
      moveY: -0.85,
      height: 7,
      width: 4,
      rotate: 0.6,
    },
  },
  {
    identifier: 'leaf-two',
    size: 5800,
    backgroundPositionX: 10.15,
    backgroundPositionY: -0.25,
    config: {
      positionX: 97,
      positionY: 63,
      moveX: 1.5,
      moveY: -0.85,
      height: 4,
      width: 8,
      rotate: -0.5,
    },
  },
  {
    identifier: 'leaf-three',
    size: 8000,
    backgroundPositionX: 8.85,
    backgroundPositionY: -0.5,
    config: {
      positionX: 84,
      positionY: 21,
      moveX: 1.5,
      moveY: -0.85,
      height: 7,
      width: 6,
      rotate: 0.75,
    },
  },
  {
    identifier: 'leaf-four',
    size: 13500,
    backgroundPositionX: 19.125,
    backgroundPositionY: -0.5,
    config: {
      positionX: 57,
      positionY: 18,
      moveX: 1.5,
      moveY: -0.85,
      height: 7,
      width: 3,
      rotate: 0.35,
    },
  },
  {
    identifier: 'leaf-five',
    size: 6500,
    backgroundPositionX: 16,
    backgroundPositionY: -1,
    config: {
      positionX: 55,
      positionY: 94,
      moveX: 1.5,
      moveY: -0.85,
      height: 10,
      width: 6,
      rotate: 0.6,
    },
  },
  {
    identifier: 'leaf-six',
    size: 5000,
    backgroundPositionX: 14,
    backgroundPositionY: -0.5,
    config: {
      positionX: 9,
      positionY: 22,
      moveX: 1.5,
      moveY: -0.85,
      height: 8,
      width: 8,
      rotate: 1,
    },
  },
  {
    identifier: 'leaf-seven',
    size: 5100,
    backgroundPositionX: 11.975,
    backgroundPositionY: -0.5,
    config: {
      positionX: 4,
      positionY: 83,
      moveX: 1.5,
      moveY: -0.85,
      height: 8,
      width: 8,
      rotate: -0.5,
    },
  },
  {
    identifier: 'leaf-eight',
    size: 5000,
    backgroundPositionX: 20.15,
    backgroundPositionY: -0.5,
    config: {
      positionX: 10,
      positionY: 74,
      moveX: 1.5,
      moveY: -0.85,
      height: 5,
      width: 8,
      rotate: 0.25,
    },
  },
  {
    identifier: 'leaf-nine',
    size: 5000,
    backgroundPositionX: 4.8,
    backgroundPositionY: -0.25,
    config: {
      positionX: 83,
      positionY: 64,
      moveX: 1.5,
      moveY: -0.85,
      height: 9,
      width: 9,
      rotate: -0.6,
    },
  },
  {
    identifier: 'leaf-ten',
    size: 5000,
    backgroundPositionX: 6.85,
    backgroundPositionY: 0,
    config: {
      positionX: 56,
      positionY: 4,
      moveX: 1.5,
      moveY: -0.85,
      height: 8,
      width: 8,
      rotate: 0.8,
    },
  },
  {
    identifier: 'leaf-eleven',
    size: 6200,
    backgroundPositionX: 17.65,
    backgroundPositionY: -0.5,
    config: {
      positionX: 28,
      positionY: 32,
      moveX: 1.5,
      moveY: -0.85,
      height: 4,
      width: 8,
      rotate: 0.6,
    },
  },
  {
    identifier: 'one-wheel',
    size: 1250,
    backgroundPositionX: 27.5,
    backgroundPositionY: -8,
    config: {
      positionX: 80,
      positionY: 83,
      positionZ: 2,
      rotate: 0.2,
      moveX: 1.5,
      moveY: -0.85,
      height: 26,
      width: 32,
    },
  },
  {
    identifier: 'speaker',
    size: 2150,
    backgroundPositionX: 35,
    backgroundPositionY: 0,
    config: {
      positionX: 12,
      positionY: 51,
      positionZ: 2,
      moveX: 1.5,
      moveY: -0.85,
      height: 24,
      width: 19,
    },
  },
  {
    identifier: 'skis',
    size: 1240,
    backgroundPositionX: 41.3,
    backgroundPositionY: -2,
    config: {
      positionX: 80,
      positionY: 40,
      positionZ: 10,
      moveX: 1.5,
      moveY: -0.85,
      height: 30,
      width: 30,
    },
  },
  {
    identifier: 'recycle',
    size: 2850,
    backgroundPositionX: 22.55,
    backgroundPositionY: 0,
    config: {
      positionX: 28,
      positionY: 10,
      rotate: -2,
      moveX: 1.5,
      moveY: -0.85,
      height: 15,
      width: 15,
    },
  },
]

const generateHandler = (element, proximity, cb) => ({x, y}) => {
  const bounds = 100
  const elementBounds = element.getBoundingClientRect()
  const centerX = elementBounds.left + elementBounds.width / 2
  const centerY = elementBounds.top + elementBounds.height / 2
  const boundX = gsap.utils.mapRange(centerX - proximity, centerX + proximity, -bounds, bounds, x)
  const boundY = gsap.utils.mapRange(centerY - proximity, centerY + proximity, -bounds, bounds, y)
  cb(boundX / 100, boundY / 100)
}

const update = (x, y) => {
  CONTAINER.style.setProperty('--ratio-x', Math.floor(gsap.utils.clamp(-60, 60, x * 100)))
  CONTAINER.style.setProperty('--ratio-y', Math.floor(gsap.utils.clamp(-60, 60, y * 100)))
}

const CONTAINER = document.querySelector('.parallax')

ITEMS.forEach((item) => {
  const div = document.createElement("div")

  div.className="parallax__item";

  div.style.setProperty('--pos-x', item.backgroundPositionX)
  div.style.setProperty('--pos-y', item.backgroundPositionY)
  div.style.setProperty('--size', item.size)
  div.style.setProperty('--width', item.config.width)
  div.style.setProperty('--height', item.config.height)
  div.style.setProperty('--x', item.config.positionX)
  div.style.setProperty('--y', item.config.positionY)
  div.style.setProperty('--z', item.config.positionZ || 0)
  div.style.setProperty('--r', item.config.rotate || 0)
  div.style.setProperty('--mx', item.config.moveX || 0)
  div.style.setProperty('--my', item.config.moveY || 0)

  CONTAINER.appendChild(div)
})

document.addEventListener('pointermove', generateHandler(CONTAINER, window.innerWidth * 0.5,  update))
