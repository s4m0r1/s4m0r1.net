<template>
    <div>
        <section class="container-fluid px-0">
            <b-navbar toggleble="lg" type="dark" variant="dark">
                <b-navbar-brand href="/">s4m0r1.net[ß]</b-navbar-brand>
                <b-collaps id="nac-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="/about">About</b-nav-item>
                        <b-nav-item href="/product">Product</b-nav-item>
                    </b-navbar-nav>
                </b-collaps>
            </b-navbar>
        </section>
        <nuxt/>
    </div>
</template>

<script>
export default {
    props: ['header'],
    layout: 'header'
}
</script>