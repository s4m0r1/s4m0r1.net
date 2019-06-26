<template>
    <div>
        <section class="container-fluid px-0">
            <b-navbar toggleble="lg" type="dark" variant="dark">
                <b-navbar-brand href="/">s4m0r1.net<span class="beta-badge">ß</span> [ver0.2.2]</b-navbar-brand>
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

<style>
    .beta-badge,
    .link-badge {
        padding: 3px 10px;
        margin-right: 8px;
        margin-left: 10px;
        font-size: 75%;
        color: white;
        border-radius: 6px;
        box-shadow: 0 0 3px #ddd;
        white-space: nowrap;
    }

    .link-badge {
        background-color: #58ACFA;
        /*青*/
    }

    .beta-badge {
        background-color: rgb(112, 84, 194);
        /*緑*/
    }
</style>
