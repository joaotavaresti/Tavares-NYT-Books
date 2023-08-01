import React from "react"
import { Header } from "./components/Header/Header"
import { Home } from "./pages/Home/Home"
import { Category } from "./pages/Category/Category"
import { Container } from "react-materialize"
import { Switch, Route } from "react-router-dom"

export const App = () => (
    <main className="flex justify-center items-center flex-col">
        <Header />
        <Container>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/:id" component={Category} />
            </Switch>
        </Container>
    </main>
)
