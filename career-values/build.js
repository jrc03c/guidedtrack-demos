const gt = require("gt-helpers")
const fs = require("fs")

const template = fs.readFileSync("template.gt", "utf8")
const data = {
  values: ["Adventure", "Autonomy", "Avoiding stress", "Building things", "Camaraderie", "Casual work environment", "Challenge", "Changing the world", "Collaborating with others", "Competition", "Creating new things", "Creativity", "Diversity", "Employee benefits", "Exposure to beauty", "Fast pace", "Fun", "Helping others", "High income", "High level of interaction with people", "Income-based on productivity", "Influencing others", "Intellectually demanding work", "Job security", "Location", "Moral / spiritual fulfillment", "Opportunity for advancement", "Opportunity to lead", "Opportunity to learn new things", "Outlet for creativity", "Physical activity", "Pleasant work environment", "Power", "Prestige", "Recognition", "Risk-taking", "Routine work", "Seeing tangible results from work completed", "Sharing ideas or information", "Socialization", "Solving problems", "Status as an expert", "Structure", "Supportive management", "Team membership", "Time freedom", "Travel", "Variety of tasks", "Work / life balance", "Working alone", "Working outside"]
}

gt.template.liquidBuild(template, data).then(final => {
  fs.writeFileSync("final.gt", final, "utf8")
})
