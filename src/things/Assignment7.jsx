export default function Assignment7() {
  return (
    <>
      {/* -------- PERSONAL DETAILS -------- */}
      <table>
        <tbody>
          <tr>
            <td>FIRST NAME</td>
            <td>
              <input type="text" /> (max 30 characters a-z and A-Z)
            </td>
          </tr>

          <tr>
            <td>LAST NAME</td>
            <td>
              <input type="text" /> (max 30 characters a-z and A-Z)
            </td>
          </tr>

          <tr>
            <td>Date of Birth</td>
            <td>
              <select>
                <option>Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>

              <select>
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

              <select>
                <option>Year</option>
                {[...Array(21)].map((_, i) => (
                  <option key={i}>{2006 + i}</option>
                ))}
              </select>
            </td>
          </tr>

          <tr>
            <td>EMAIL ID</td>
            <td>
              <input type="email" />
            </td>
          </tr>

          <tr>
            <td>MOBILE NUMBER</td>
            <td>
              <input type="tel" /> (10 digit number)
            </td>
          </tr>

          <tr>
            <td>GENDER</td>
            <td>
              <input type="radio" name="gender" /> Male
              <input type="radio" name="gender" /> Female
            </td>
          </tr>

          <tr>
            <td>Address</td>
            <td>
              <textarea></textarea>
            </td>
          </tr>

          <tr>
            <td>CITY</td>
            <td>
              <input type="text" /> (max 30 characters)
            </td>
          </tr>

          <tr>
            <td>PIN CODE</td>
            <td>
              <input type="text" /> (6 digit number)
            </td>
          </tr>

          <tr>
            <td>STATE</td>
            <td>
              <input type="text" /> (max 30 characters)
            </td>
          </tr>

          <tr>
            <td>COUNTRY</td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>HOBBIES</td>
            <td colSpan="2">
              <label>Drawing</label> <input type="checkbox" />
              <label>Singing</label> <input type="checkbox" />
              <label>Dancing</label> <input type="checkbox" />
              <br />
              <label>Sketching</label> <input type="checkbox" />
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>

      {/* -------- QUALIFICATION -------- */}
      <table>
        <tbody>
          <tr>
            <td>Qualification</td>
            <th>SL No.</th>
            <th>Examination</th>
            <th>Board</th>
            <th>Percentage</th>
            <th>Year of Passing</th>
          </tr>

          {["Class X", "Class XII", "Graduation", "Masters"].map(
            (course, index) => (
              <tr key={index}>
                <td></td>
                <td>{index + 1}</td>
                <td>{course}</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
            )
          )}

          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>(10 character max)</th>
            <th>(upto 2 decimal)</th>
            <th></th>
          </tr>
        </tbody>
      </table>

      {/* -------- COURSES -------- */}
      <table>
        <tbody>
          <tr>
            <td>
              Courses <br /> Applied For
            </td>
            <td>
              <input type="radio" name="course" /> BCA
              <input type="radio" name="course" /> B.Com
              <input type="radio" name="course" /> B.Sc
              <input type="radio" name="course" /> B.A
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}