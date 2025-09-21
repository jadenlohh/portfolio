function navbar() {
  return (
    <div className="fixed top-0 w-full">
      <nav className="flex justify-between items-center p-6">
        <span className="text-2xl font-medium">Jaden.</span>

        <div>
          <ul>
            <li className="inline px-4">Experience</li>
            <li className="inline px-4">Projects</li>
            <li className="inline px-4">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
