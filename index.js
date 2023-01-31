// code your solution here
const saturdayFun = (activity) => {
	if (activity) return `This Saturday, I want to ${activity}!`
	else return `This Saturday, I want to roller-skate!`
}

const mondayWork = (activity) => {
	if (activity) return `This Monday, I will ${activity}.`
	else return `This Monday, I will go to the office.`
}

const wrapAdjective = (flair = '*') => {
	const encouragingPromptFunction = (adjective = 'special') => {
		return `You are ${flair}${adjective}${flair}!`
	}
    return encouragingPromptFunction
}
