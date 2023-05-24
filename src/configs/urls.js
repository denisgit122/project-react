const baseURL = "http://ec2-34-236-145-77.compute-1.amazonaws.com:5200"

const cars= "/cars"

const urlsCar = {
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    }
}
export {
    urlsCar, baseURL
}