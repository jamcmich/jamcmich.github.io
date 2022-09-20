<template>
  <nav class="navbar-component">
    <a class="__logo" href="/">
      <p>JM</p>
      <p>JM</p>
      <!--      <p>JM</p>-->
    </a>

    <ul class="__nav-links">
      <li class="__link __active" data-text="About">About</li>
      <li class="__link" data-text="Projects">Projects</li>
      <li class="__link" data-text="Contact">Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style lang="scss" scoped>
.navbar-component {
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 0 200px;

  background-color: transparent;

  .__logo {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;

    font-family: var(--font-family__nabla);
    font-weight: var(--font-weight__regular);
    font-size: var(--font-size__logo);

    background-color: transparent;
    outline: 2px solid transparent;

    text-decoration: none;
    cursor: pointer;

    transition: all 0.1s ease 0.2s;

    /* Background */
    p:nth-child(1) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      filter: brightness(0) saturate(100%) invert(82%) sepia(36%) saturate(221%) hue-rotate(338deg) brightness(92%) contrast(88%);

      transition: all 0.2s ease;
    }

    /* Foreground */
    p:nth-child(2) {
      position: absolute;
      top: 46%;
      left: 46%;
      transform: translate(-50%, -50%);

      opacity: 100%;
      filter: brightness(0%) saturate(0%) contrast(100%) invert(100%);

      transition: all 0.1s ease, opacity 0.4s ease 0.2s;
    }

    &:hover {
      outline: 2px solid var(--color__wool);
      transition: all 0.1s ease 0.2s;

      /* Foreground */
      p:nth-child(2) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        opacity: 0;

        transition: all 0.1s ease, opacity 0.4s ease 0.2s;
      }
    }
  }

  .__nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 72px;

    color: var(--color__wool);
    font-family: var(--font-family__signika);
    font-weight: var(--font-weight__regular);
    font-size: var(--font-size__subheading);

    list-style-type: none;

    .__link {
      position: relative;
      cursor: pointer;

      &:before {
        content: attr(data-text);
        position: absolute;
        width: 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, var(--color__wool) 65%);

        transition: all 0.4s ease;
      }

      &:hover::before {
        width: 100%;
        color: var(--color__mud);

        transition: all 0.4s ease;
      }
    }

    .__active {
      color: var(--color__mud);
      font-weight: var(--font-weight__semi-bold);
    }
  }
}
</style>