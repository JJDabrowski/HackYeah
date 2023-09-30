import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Storage() { }

Storage.reset = async () => {
    try {
        console.log('Reseting storage');
        await AsyncStorage.setItem('visits', JSON.stringify([]));
    } catch (error) {
        console.error('Error while reseting workouts storage: ', error);
    }
};

// Storage.saveWorkout = async (workout) => {
//     try {
//         console.log('Saving workout in workouts storage');
//         const workouts = await Storage.getWorkouts()

//         for (let i = 0; i < workouts.length; i++) {
//             if (workouts[i].name === workout.name) {
//                 workouts[i] = workout
//                 break;
//             }
//         }

//         await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
//     } catch (error) {
//         console.error('Error while saving workout in workouts storage: ', error);
//     }
// };

// Storage.addWorkout = async (workout) => {
//     try {
//         console.log('Adding new workout to workouts storage');
//         console.log(JSON.stringify(workout))
//         const workouts = await Storage.getWorkouts()
//         workouts.push(workout)
//         await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
//     } catch (error) {
//         console.error('Error while adding new workout to workouts storage: ', error);
//     }
// };

Storage.getVisits = async () => {
    try {
        console.log('Fetching visits from storage');
        json = await AsyncStorage.getItem('visits');
        console.log("Jsooon ",json)
        return !json ? [] : JSON.parse(json)
    } catch (error) {
        console.error('Error while fetching visits from storage: ', error);
    }
};
