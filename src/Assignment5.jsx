export default function Assignment5() {
  return (
    <form>

      <label>First Name:</label>
      <input type="text" />

      <label>Last Name:</label>
      <input type="text" />

      <br /><br />

      <input type="radio" name="gender" /> Male
      <input type="radio" name="gender" /> Female
      <input type="radio" name="gender" /> Others

      <br /><br />

      <label>Email:</label>
      <input type="email" placeholder="Your Email" />

      <label>Password:</label>
      <input type="password" placeholder="Your password" />

      <br /><br />

      <label>Birthday:</label>

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
        <option>Day</option>
        {[...Array(31)].map((_, i) => (
          <option key={i + 1}>{i + 1}</option>
        ))}
      </select>

      <select>
        <option>Year</option>
        {[...Array(21)].map((_, i) => (
          <option key={i}>{2006 + i}</option>
        ))}
      </select>

      <br /><br />

      <input type="checkbox" /> I agree to terms and conditions

      <br /><br />

      <button type="submit">Submit</button>

    </form>
  );
}