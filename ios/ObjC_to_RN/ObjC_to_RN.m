#import <Foundation/Foundation.h>
#import "ObjC_to_RN.h"

@implementation SampleClass

RCT_EXPORT_MODULE();

- (NSString *)hello{
NSLog( @"Hello world !");
return @"Hello world !";
}

RCT_EXPORT_METHOD(sayHello: (RCTResponseSenderBlock)callback{
callback(@[[NSNull null], self.hello]);
});

@end
