import React from 'react';
import "../../../global_components/backgroundcolors.css"
import { useNavigate } from "react-router-dom";
import "./assignment3Main.css"


function Assignment3Main() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/");
    };

  return (
    <div class="assignment3-wrapper">
      
      <div class="assignment3-header">
        <h1>My journey to the top</h1>
        <p>
          In this post I will be showing my stategy and progress on this assignment to make the most efficient
          algorithm for a binary search tree. 
        </p>
        <p> the following is the requirements for the assignment.</p>
      </div>
    <h2>Assignment3</h2>
<p>Deadline: 11:59PM Apr 5</p>
<h3>Partner Requirement</h3>
<p>You can work in a group of up to 3. No exceptions to this group number. Your partner can be from
a different set.</p>
<h3>Requirements</h3>
<p>In this assignment, you are required to write a function that reads integer inputs and add a node
and delete a node to a binary search tree. It should be able to perform pre-order traversal of the
tree and print it to the output.</p>
<p>The delete operation is different from conventional delete operations. If a data is found in the tree,
then the node is deleted. If the data is not found, then the node is added.</p>
<p>The input file purely contains integer range values in each line.</p>
<pre>
&gt;&gt; cat input1.txt
1
2
3
4
5
6
8
9
&gt;&gt; cat input2.txt
7
9
&gt;&gt; ./a.out input1.txt intput2.txt output.txt
&gt;&gt; cat output.txt
1
2
3
4
5
6
8
7
</pre>
<p>Below are the specifications of the lab.</p>
<ol>
<li>The run command will be</li>
<pre>
&gt;&gt; ./&lt;name of executable&gt; &lt;input file1&gt; &lt;input file 2&gt; &lt;output file&gt;
</pre>
<li>There will be duplicates.</li>
<li>Values in both input files are not sorted.</li>
<li>There will be corner case testing in this assignment.</li>
<li>No limit on the number of lines in input files</li>
<li>Guaranteed to have no empty lines, no integer outside integer range and no data other than int type in the input file</li>
<li>Do not add any random trailing new lines or spaces. I will allow up to one new line character at the end of an output file. Example below:</li>
<pre>
&gt;&gt; cat output.txt
<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5 having a new line character here is please</p>
&gt;&gt;
</pre>
</ol>
<p>Below examples will be incorrect</p>
<pre>
<p>&gt;&gt; cat output.txt</p>
<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5&gt;&gt;  no new line character</p>
<p>Or</p>
<p>&gt;&gt; cat output.txt</p>
<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>&lt;- extra new line</p>
<p>&gt;&gt;</p>
</pre>
<h1>Grading</h1>
<p>I will provide sample input and output files. Make sure to test against those to ensure that your program output format works. Any grading failure due to not following specifications will result in 0. For full marks this week, you must:</p>
<ul>
  <li>(1 point) Correctly submit A number file of you and your partner</li>
  <li>(6 point) Generate a correct solution (including correct memory allocation and deallocation) to the problem(s) in this lab</li>
  <li>(1 point) handle error cases</li>
</ul>
<p><strong>Extra Bonus</strong></p>
<p>Your job is to make the above operations as fast as possible. I will allow you to change the data structures or operations as long as it lets do the operation as specified. I will not count space complexity into account. I will just run the program and get the time. If you are interested, you can run the following to see how long it takes to run the program.</p>
<pre>&gt;&gt; time ./&lt;name of executable&gt; &lt;input file1&gt; &lt;input file 2&gt; &lt;output file&gt;</pre>
<p>It will report the time it takes to run the program. I will not expose my input, but it will be a rather large input, so it is obvious to see how much performance improvement is achieved. I will rank the speed from the shortest runtime to the longest runtime. Top 30 students will get the bonus. The following is the bonus that will be applied:</p>
<ul>
  <li>Rank 1-10 students: 5% bonus to the final grade</li>
  <li>Rank 11-20 students: 4% bonus to the final grade</li>
  <li>Rank 21-30 students: 3% bonus to the final grade</li>
  <li>Rank 31-40 students: 2% bonus to the final grade</li>
</ul>
<p>Unfortunately, the remaining students will not get any bonus point. I will announce the winners by listing all A numbers of the class from the fastest to the lowest. This is an optional part of the assignment, and it will not impact any of your existing grades.</p>
<h2>Submission Files</h2>
<ul>
  <li>You must deliver only one .c file named: assignment3.c (do not capitalize)</li>
  <li>One or more AXXXX.txt files if you have a partner (empty file, but with your A number as file name. Make sure to include 0’s, match this A number with your A number in learning hub, and have .txt extension)</li>
</ul>

    </div>
  );
}

export default Assignment3Main;
