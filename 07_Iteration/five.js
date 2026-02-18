const codingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby']
codingLanguages.forEach( function (val) {
    // console.log(val)
})

const codingLanguages2 = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby']
codingLanguages2.forEach( (val) => {
    // console.log(val)
})
codingLanguages.forEach( (val, index ) => {
    // console.log( val, index   )

})


const myCoding = [
    {languageName: 'JavaScript', 
        languagefileName: 'js'
    },
    {languageName: 'python', 
        languagefileName: 'py'
    },
    {languageName: 'c++', 
        languagefileName: 'cpp'
    },
    
]
myCoding.forEach( (val) => {
    console.log(val.languagefileName)
})