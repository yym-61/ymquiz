//change 10 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="C major related minor?"
choice1[1]="a minor"
choice1[2]="d minor"
choice1[3]="g minor"
choice1[4]="e minor"

question[2]="How many sharps in D major?"
choice2[1]="1"
choice2[2]="2"
choice2[3]="3"
choice2[4]="4"

question[3]="Bb major related minor?"
choice3[1]="c minor"
choice3[2]="g minor"
choice3[3]="f minor"
choice3[4]="d minor"

question[4]="B major dominant note?"
choice4[1]="E"
choice4[2]="F#"
choice4[3]="G#"
choice4[4]="D#"

question[5]="How many semitones in a perfect 4th?"
choice5[1]="4"
choice5[2]="5"
choice5[3]="6"
choice5[4]="7"

question[6]="How many semitones in a perfect 5th?"
choice6[1]="4"
choice6[2]="5"
choice6[3]="6"
choice6[4]="7"

question[7]="How many semitones in a major 3rd?"
choice7[1]="4"
choice7[2]="5"
choice7[3]="6"
choice7[4]="7"

question[8]="How many semitones in a tritone?"
choice8[1]="4"
choice8[2]="5"
choice8[3]="6"
choice8[4]="7"

question[9]="How many semitones in a minor 7th?"
choice9[1]="10"
choice9[2]="7"
choice9[3]="8"
choice9[4]="9"

question[10]="How many semitones in a minor 6th?"
choice10[1]="7"
choice10[2]="8"
choice10[3]="9"
choice10[4]="10"

solution[1]="a"
solution[2]="b"
solution[3]="b"
solution[4]="b"
solution[5]="b"
solution[6]="d"
solution[7]="a"
solution[8]="c"
solution[9]="a"
solution[10]="b"

