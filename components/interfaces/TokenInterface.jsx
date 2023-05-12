import { useEffect } from "react";
import GLDToken from "../../hooks/contracts/GLDToken";
import { GLDTokenAddress } from "../../hooks/contracts/ContractAddresses";
import BalanceDisplay from "./ERC20/BalanceDisplay";
import MintController from "./ERC20/MintController";
import Approve from "./ERC20/Approve";
import GetAllowance from "./ERC20/GetAllowance";

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
      <p className="mb-2">Contract Address: <span className="badge-dark">{GLDTokenAddress}</span> </p>
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
