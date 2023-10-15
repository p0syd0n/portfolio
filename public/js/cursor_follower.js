document.addEventListener("DOMContentLoaded", function() {
  const cursorFollower = document.createElement("div");
  cursorFollower.classList.add("cursor-follower");
  document.body.appendChild(cursorFollower);

  const aura = document.createElement("div");
  aura.classList.add("aura");
  document.body.appendChild(aura);

  document.addEventListener("mousemove", function(event) {
    const auraSize = 30; // Adjust the aura size
    const followerSize = 20; // Adjust the size of the cursor follower

    const auraX = event.clientX - auraSize / 2;
    const auraY = event.clientY - auraSize / 2;

    const followerX = event.clientX - followerSize / 2;
    const followerY = event.clientY - followerSize / 2;

    aura.style.left = auraX + "px";
    aura.style.top = auraY + "px";

    cursorFollower.style.left = followerX + "px";
    cursorFollower.style.top = followerY + "px";

    // Gradually fade out the aura as it moves away from the cursor
    const distance = Math.sqrt(
      Math.pow(followerX - auraX, 2) + Math.pow(followerY - auraY, 2)
    );
    const maxDistance = 50; // Adjust the maximum distance for the aura
    const opacity = 1 - (distance / maxDistance);

    aura.style.opacity = opacity;
  });
});
