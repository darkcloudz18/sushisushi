import '../styles/stores.scss';
import Title from '../components/Title';
import TsAndCsNav from "../components/ts_and_cs/TsAndCsNav";
import Website from "../components/ts_and_cs/Website";
import Privacy from "../components/ts_and_cs/Privacy";
import OnlineOrdering from "../components/ts_and_cs/OnlineOrdering";
import Family from "../components/ts_and_cs/Family";

export default function TermsAndConditions() {
    return (
        <>
            <Title title="Terms and Conditions" />
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <TsAndCsNav />
                    </div>
                    <div className="col-12 col-md-9 py-5 py-md-3">
                        <Website />
                        <Privacy />
                        <OnlineOrdering />
                        <Family />
                    </div>
                </div>
            </div>
        </>
    );
}