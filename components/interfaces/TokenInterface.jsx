import { useEffect } from "react";
import GLDToken from "../../hooks/contracts/GLDToken";
import BalanceDisplay from "./ERC20/BalanceDisplay";
import MintController from "./ERC20/MintController";
import Approve from "./ERC20/Approve";
import GetAllowance from "./ERC20/GetAllowance";
import GetContracts from "../GetContracts";

const TokenInterface = () => {

  const gldToken = new GLDToken();

  useEffect(() => {
    (async () => {
      await gldToken.connect();
    })();
  }, []);

  return (
    <div>
      <h1>ERC20 Contract</h1>
      <div className="mb-2">
        <GetContracts />
      </div>
      {/* MINT */}
      <MintController tokenContract={gldToken} />
      <br />
      {/* APPROVE */}
      <Approve tokenContract={gldToken} />
      <br />
      {/* ALLAWANCE */}
      <GetAllowance tokenContract={gldToken} />
      <br />
      <BalanceDisplay tokenContract={gldToken} />
    </div>
  );
};

export default TokenInterface;
