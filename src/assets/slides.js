export function createSlides() {
    let x = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,];
    return x.map(item => {
        return {
            src: item % 2 == 0 ? '/slide_images/2.jpg' : '/slide_images/3.jpg',
            alt: `Image ${ item }`
        }
    })
 }