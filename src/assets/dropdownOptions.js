export const roles = [
    "frontend",
    "ios",
    "android",
    "tech lead",
    "backend"
]

export const workType = [
    'Remote',
    'on-site'
]

export const experience = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

export const minBasePay = experience.map(num => (experience[experience.length-1] * num).toString() + 'L')

