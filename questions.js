module.exports = [
  {
    id: 1,
    text: "The officer says your name incorrectly.",
    options: {
      A: "Correct them politely.",
      B: "Ignore it and move on.",
      C: "Laugh and make a joke.",
      D: "Get irritated and correct them sharply.",
      E: "Say nothing but feel disrespected."
    },
    next: 2
  },
 { 
    id: 2,
    text: "Your cellmate accuses you of moving his property.",
    options: {
      A: "Explain your side calmly and offer to help look.",
      B: "Snap back and deny it aggressively.",
      C: "Walk away to avoid escalation.",
      D: "Blame someone else without knowing.",
      E: "Suggest involving an officer if needed."
    },
    next: 3
  },
{
    id: 3,
    text: "You realize you forgot to sign up for a required class.",
    options: {
      A: "Ask staff respectfully if you can still join.",
      B: "Blame the system for not reminding you.",
      C: "Ask another reisdent to sign you up.",
      D: "Decide not to participate at all.",
      E: "Take responsibility and ask when the next session is."
    },
    next: 4
  },
  {
    id: 4,
    text: "Someone cuts in front of you in the chow line.",
    options: {
      A: "Let it go to avoid conflict.",
      B: "Confront them loudly.",
      C: "Ask them calmly to move back.",
      D: "Report it to staff.",
      E: "Cut in front of someone else to even it out."
    },
    next: 5
  },
  {
    id: 5,
    text: "An officer tells you to redo a task you believe you already completed.",
    options: {
      A: "Do it again without argument.",
      B: "Argue your point.",
      C: "Ask politely for clarification.",
      D: "Refuse and say it is unfair.",
      E: "Ask to speak to another officer."
    },
    next: 6
  },
  {
    id: 6,
    text: "Two residents are talking negatively about you.",
    options: {
      A: "Ignore it.",
      B: "Confront them directly.",
      C: "Ask calmly what the issue is.",
      D: "Spread counter-rumors.",
      E: "Tell staff you feel targeted."
    },
    next: 7
  },
  {
    id: 7,
    text: "Your name is missing from the work roster.",
    options: {
      A: "Ask staff respectfully to check.",
      B: "Accuse staff of playing favorites.",
      C: "Ask another resident what to do.",
      D: "Skip work entirely.",
      E: "Volunteer to help until it is sorted out."
    },
    next: 8
  },
  {
    id: 8,
    text: "A resident offers you something you know is not allowed.",
    options: {
      A: "Decline firmly.",
      B: "Accept quietly.",
      C: "Report it.",
      D: "Joke about it but decline it.",
      E: "Take it just this once."
    },
    next: 9
  },
  {
    id: 9,
    text: "You receive upsetting news from home.",
    options: {
      A: "Take time alone to calm down.",
      B: "Lash out at others.",
      C: "Ask to speak with mental health staff.",
      D: "Pretend nothing is wrong.",
      E: "Talk to a trusted peer."
    },
    next: 10
  },
  {
    id: 10,
    text: "Two residents argue during a class you're in.",
    options: {
      A: "Stay out of it.",
      B: "Try to mediate calmly.",
      C: "Take sides.",
      D: "Escalate the argument.",
      E: "Notify the facilitator."
    },
    next: 11
  },
{
    id: 11,
    text: "Two offices give you conflicting instructions.",
    options: {
      A: "Ask which instruction takes priority.",
      B: "Choose whichever you prefer.",
      C: "Do nothing until they sort it out.",
      D: "Complain loudly.",
      E: "Follow the last instruction given."
    },
    next: 12
  },
  {
    id: 12,
    text: "You run out of soap before commissary day.",
    options: {
      A: "Ask staff for assistance.",
      B: "Borrow from a peer.",
      C: "Take someone's without asking.",
      D: "Go without.",
      E: "Offer to trade for some."
    },
    next: 13
  },
  {
    id: 13,
    text: "Officers search your area and disrupt your belongings.",
    options: {
      A: "Stay calm and let them work.",
      B: "Complain angrily.",
      C: "Ask politely to organize afterward.",
      D: "Accuse them of targeting you.",
      E: "Refuse to cooperate."
    },
    next: 14
  },
  {
    id: 14,
    text: "A resident asks you to hold something for them.",
    options: {
      A: "Decline.",
      B: "Accept without asking questions.",
      C: "Ask what it is first.",
      D: "Suggest they handle it themselves.",
      E: "Report the request."
    },
    next: 15
  },
  {
    id: 15,
    text: "You’re placed in a class you didn’t request.",
    options: {
      A: "Participate anyway.",
      B: "Refuse to attend.",
      C: "Ask respectfully for a reassignment.",
      D: "Complain to peers.",
      E: "Attend but disrupt the class."
    },
    next: 16
  },
  {
    id: 16,
    text: "Your medical request is taking longer than expected.",
    options: {
      A: "Ask staff for an update.",
      B: "Accuse them of ignoring you.",
      C: "Submit another request.",
      D: "Yell to get attention.",
      E: "Ignore the issue."
    },
    next: 17
  },
  {
    id: 17,
    text: "A resident is visibly upset and pacing.",
    options: {
      A: "Ask if they're okay.",
      B: "Ignore them.",
      C: "Tease them.",
      D: "Notify them.",
      E: "Tell others to stay away."
    },
    next: 18
  },
  {
    id: 18,
    text: "You make an error during your job assignment.",
    options: {
      A: "Fix it quietly.",
      B: "Blame someone else.",
      C: "Ask for help.",
      D: "Pretend you didn't notice.",
      E: "Quit the taks."
    },
    next: 19
  },
  {
    id: 19,
    text: "As officer speaks to you harshly.",
    options: {
      A: "Stay calm and respond respectfully.",
      B: "Match their tone.",
      C: "Walk away.",
      D: "Ask politely to clarify the issue.",
      E: "File a grievance immediately."
    },
    next: 20
  },
  {
    id: 20,
    text: "A group encourages you to skip a required program.",
    options: {
      A: "Decline and attend.",
      B: "Go along wwith them.",
      C: "Tell staff you are being pressured.",
      D: "Make an excuse to leave.",
      E: "Try to convince them to go too."
    },
    next: 21
  },
  {
    id: 21,
    text: "Someone claims you owe them for an item you never received.",
    options: {
      A: "Calmly eplain the misunderstanding.",
      B: "Pay them anyway to avoid conflict.",
      C: "Threaten them back.",
      D: "Ask staff to mediate.",
      E: "Ask for proof."
    },
    next: 22
  },
{
    id: 22,
    text: "Your program time changes unexpectedly.",
    options: {
      A: "Adjust and attend.",
      B: "Refuse because it is inconvenient.",
      C: "Ask staff why it changed.",
      D: "Complain to peers.",
      E: "Show up late intentionally."
    },
    next: 27
  },
{
    id: 27,
    text: "Two residents start arguing loudly.",
    options: {
      A: "Stay out of it.",
      B: "Try to calm them down.",
      C: "Take sides.",
      D: "Escalate it with comments.",
      E: "Notify staff."
    },
    next: 34
  },
{
    id: 34,
    text: "A staff member gives you instructions quickly.",
    options: {
      A: "Ask them to repeat it slower.",
      B: "Nod but misunderstand the task.",
      C: "Get frustrated and say they're talking to fast.",
      D: "Try to complete the task without clarity.",
      E: "Ask another resident to explain."
    },
    next: 41
  },
{
    id: 41,
    text: "A staff member misunderstands your question.",
    options: {
      A: "Clarify calmly.",
      B: "Repeat the same words louder.",
      C: "Get frustrated and shut down.",
      D: "Assume they're ignoring you on purpose.",
      E: "Ask another staff member instead."
    },
    next: 48
  },
{
    id: 48,
    text: "The group suddenly becomes loud and active.",
    options: {
      A: "Stay but focus on your task.",
      B: "Cover your ears or show discomfort.",
      C: "Leave abruptly.",
      D: "Tell others to quiet down.",
      E: "Ask staff for a break."
    },
    next: 52
  },
{
    id: 52,
    text: "A resident with a higher status in the unit tells you to sit next to them.",
    options: {
      A: "Sit there willingly.",
      B: "Decline politely.",
      C: "Sit there because you feel pressured.",
      D: "Ask why it matters.",
      E: "Tell staff you feel uncomfortable."
    },
    next: 56
  },
{
    id: 56,
    text: "A resident asks personal questions about your family.",
    options: {
      A: "Redirect the conversation.",
      B: "Answer briefly.",
      C: "Share more than you intended.",
      D: "Ask why they want to know.",
      E: "Tell staff you feel uncomfortable."
    },
    next: 63
  },
{
    id: 63,
    text: "A resident sits unusually close to you in the dayroom.",
    options: {
      A: "Move politely.",
      B: "Ask them to give you space.",
      C: "Stay because you don't want conflict.",
      D: "Confront them aggressively.",
      E: "Tell staff if it continues."
    },
    next: 72
  },
{
    id: 72,
    text: "You're asked to write down three goals for the next 30 days.",
    options: {
      A: "Write realistic, specific goals.",
      B: "Write vague goals just to finish.",
      C: "Refuse because goals don't matter.",
      D: "Copy someone else's ideas.",
      E: "Ask for help if you're unsure."
    },
    next: 81
  },
{
    id: 81,
    text: "You're asked how you will get to future appointments.",
    options: {
      A: "Create a realistic transportation plan.",
      B: "Say I'll figure it out later.",
      C: "Blame lack of transportation for future absences.",
      D: "Ask for help finding options.",
      E: "Say you will rely on others without confirming."
    },
    next: 97
  },

{
    id: 97,
    text: "You've been doing well for a few weeks.",
    options: {
      A: "Keep following your plan.",
      B: "Start skipping small step, thinking I don't need them.",
      C: "Stop checking in with support.",
      D: "Take on more stress.",
      E: "Accept that you are cured."
    },
    next: null
  },


  ];