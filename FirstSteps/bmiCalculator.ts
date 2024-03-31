


const calculateBmi = (height: number, weight: number): string => {
    const heightInMeters = height / 100
    const bmi = weight / (heightInMeters ^ 2)
    if (bmi >= 25) {
        return 'Abnormal (overweight)'
    }
    else if (bmi <= 18.4) {
        return 'Abnormal (underweight)'
    }
    else {
        return 'Normal (healthy weight)'
    }

}

console.log(calculateBmi(180, 74))