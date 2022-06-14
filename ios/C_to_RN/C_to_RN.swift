import Foundation

@objc(C_to_RN)
class C_to_RN : NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool {return false }
  @objc func WrapFactorial(_ num:(Int), callback: RCTResponseSenderBlock) {
       callback([NSNull(), factorial(Int32(num)) as Any])
  }
  
}
